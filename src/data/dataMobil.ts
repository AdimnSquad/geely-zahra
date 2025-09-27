import { db } from "../services/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

export interface MobilColor {
  name: string;
  hex: string;
  image: string;
}

export interface HargaMobil{
  model: string;
  price: number;
  discount?: number;
}

export interface Mobil {
  id: number;
  id_doc: string; // id dokumen dari Firestore
  nama: string;
  slug: string;
  cover?: string;
  colors?: MobilColor[];
  image?: string[];
  deskripsi?: string;
  harga?: HargaMobil[];
}

export const fetchMobils = async (): Promise<Mobil[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "mobil"));
    const data: Mobil[] = querySnapshot.docs.map((doc) => {
      const mobilData = doc.data() as Omit<Mobil, "id_doc" | "colors" | "harga"> & {
        colors?: { [key: string]: { hex: string; image: string } };
        harga?: {[key: string]: { model: string; price: number, discount?: number } };
      };

      let colorsArray: { name: string; hex: string; image: string }[] = [];

      if (mobilData.colors) {
        colorsArray = Object.entries(mobilData.colors).map(([name, val]) => ({
          name,
          hex: val.hex,
          image: val.image,
        }));
      }

      let hargaArray: { model: string; price: number }[] = [];
      if (mobilData.harga) {
        hargaArray= Object.entries(mobilData.harga).map(([model, val]) => ({
          // model: val.model,
          model,
          price: val.price,
          discount: val.discount,
        }))
      }

      return {
        ...mobilData,
        id_doc: doc.id,
        colors: colorsArray,
        harga: hargaArray,
      };
    });

    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export const fetchMobilBySlug = async (slug: string): Promise<Mobil | null> => {
  try {
    const q = query(
      collection(db, "mobil"),
      where("slug", "==", slug),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;

    const docSnap = querySnapshot.docs[0];
    const mobilData = docSnap.data() as Omit<Mobil, "id_doc" | "colors"> & {
      colors?: { [key: string]: { hex: string; image: string } };
    };

    let colorsArray: { name: string; hex: string; image: string }[] = [];

    if (mobilData.colors) {
      colorsArray = Object.entries(mobilData.colors).map(([name, val]) => ({
        name,
        hex: val.hex,
        image: val.image,
      }));
    }

    return {
      ...mobilData,
      id_doc: docSnap.id,
      colors: colorsArray,
    };
  } catch (error) {
    console.error("Error fetching mobil by slug: ", error);
    return null;
  }
};

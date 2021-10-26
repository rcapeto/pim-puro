export interface Installation {
   name: string;
   image: string;
};

export interface Room {
   name: string;
   id: number;
   description: string;
   image: string;
   price: number;
   images: {url: string;}[];
   infos: string[];
};

export interface Comment {
   user: string;
   id: number;
   text: string;
}

export interface Error {
   field: string;
   message: string;
};
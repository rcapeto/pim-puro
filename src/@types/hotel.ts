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
   messageTranslated: string;
   filedTranslated: string;
};

export type Field = 
   'name' |
   'birth_date' |
   'enter_date' |
   'exit_date' |
   'adult_number' |
   'children_number' |
   'address' |
   'cellphone' |
   string
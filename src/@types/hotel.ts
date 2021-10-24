export interface Installation {
   name: string;
   image: string;
};

export interface Room {
   name: string;
   id: number;
   description: string;
   image: string;
};

export interface Comment {
   user: string;
   id: number;
   text: string;
}
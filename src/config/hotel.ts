import { Installation, Room, Comment } from '../@types/hotel';

export const images = {
   harHotel: '/assets/har-hotel.png',
   room: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
};

export const installations: Installation[] = [
   {
      name: 'Academia',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
   },
   {
      name: 'Bar ao ar livre',
      image: 'https://images.unsplash.com/photo-1537639622086-73570d45a9ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
   },
   {
      name: 'O SPA',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
   },
   {
      name: 'Piscina',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
   },
   {
      name: 'Restaurante',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
   },
   {
      name: 'Lavanderia',
      image: 'https://images.unsplash.com/photo-1551761429-8232f9f5955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80'
   }
];

const roomImages = [
   {
      url: 'https://images.unsplash.com/photo-1576675784432-994941412b3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2944&q=80'
   },
   {
      url: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2920&q=80'
   },
   {
      url: 'https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80'
   }
];

export const homeRooms: Room[] = [
   {
      price: 800,
      infos: [
         'Quarto com vista ?? piscina;',
         'Permitido a entrada de pets;',
         'Cama de casal;',
         '130m??.'
      ],
      name: 'Su??te de Casal',
      id: 1,
      images: roomImages,
      description: 'Uma bela su??te com uma aconchegante cama de casal, aonde tem uma linda vista e um maravilhoso espa??o.',
      image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
   },
   {
      price: 250,
      name: 'Su??te Amig??vel',
      description: 'Para voc?? viajar com um amigo e poder relaxar da melhor maneira se acomodando em camas de solteiro separadas.',
      id: 2,
      infos: [
         '63m??;',
         'Cama de solteiro;',
         'Servi??o de quarto.'
      ],
      images: roomImages,
      image: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
   }
];

export const comments: Comment[] = [
   {
      "user": "Sr e Sr(a) Capeto",
      "text": "Um belo lugar para tirar a cabe??a do trabalho!!",
      "id": 1
   },
   {
      "user": "Sr e Sr(a) Rosa",
      "text": "Perfeito para relaxar! Indico muito, servi??o maravilhoso",
      "id": 2
   },
   {
      "user": "Sr e Sr(a) Herbert",
      "text": "Passamos o Natal, achamos maravilhoso! Recomendamos!",
      "id": 3
   }
];
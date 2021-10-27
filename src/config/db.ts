const user = 'harhotel';
const password = 'harADS2021'
const server = 'harServer';
const database = `harDB`;
const table_name = 'Reservations';

const connectionSTR = `Server=${server};Database=${database};User Id=${user};Password=${password}`;

const fields = [
   'room_id', 'enter_date', 'exit_date',
   'adult_number', 'children_number',
   'id'
];

export {
   connectionSTR,
   table_name,
   fields
};
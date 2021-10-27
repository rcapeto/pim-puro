import MSSQL from 'mssql';

import { connectionSTR, table_name, fields } from '../config/db';
import { Reservation } from '../@types/hotel';

const createTable = async (connection: MSSQL.ConnectionPool) => {
   console.log('Connection[createTable]', { connection });
   const config = { nullable: false };

   const table = new MSSQL.Table(table_name);
   table.create = true;
   
   table.columns.add('client', MSSQL.NVarChar(), config);
   for(const field of fields) table.columns.add(field, MSSQL.VarChar(), config);

   const request = new MSSQL.Request()
      request.bulk(table)
         .then(result => {
            console.log('Success bulk[createTable]', { result });
         })
         .catch(error => {
            console.error({
               message: 'Error in bulk[createTable]',
               error
            });
         });
};

export const openConnection = () => {
   MSSQL.connect(connectionSTR)
      .then(connect => {
         (window as any).DBConnection = connect;
         createTable(connect);
      })
      .catch(error => {
         console.error({
            error,
            message: 'Fail to connect in data-base'
         });
      });
};

export const execSQLQuery = async (query: string) => {
   const connection = (window as any).DBConnection as MSSQL.ConnectionPool;

   connection &&
   connection.request()
      .query(query)
      .then(result => {
         console.log({
            result,
            location: 'execSQLQuery'
         });
      })
      .catch(error => {
         console.error({
            error,
            message: error.message,
            location: 'execSQLQuery'
         })
      });
}

export const handleCreateQuery = (reservation: Reservation): string => {
   const { 
      client,
      room_id,
      enter_date,
      exit_date,
      adult_number,
      children_number,
      id
   } = reservation;

   const clientString = JSON.stringify(client);

   return `
      INSERT INTO ${table_name}(client, ${fields.join(', ')}) VALUES(
         '${clientString}',
         '${room_id}',
         '${enter_date}',
         '${exit_date}',
         '${adult_number}',
         '${children_number}',
         '${id}'
      )
   `;
};
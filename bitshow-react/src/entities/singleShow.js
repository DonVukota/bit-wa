 import React from 'react';
 import Show from "../show";

 class singleShow extends Show {
     constructor(id, name, image, summary) {
         super("", name, image);
         this.summary = summary;
     }
 }

 export default singleShow;
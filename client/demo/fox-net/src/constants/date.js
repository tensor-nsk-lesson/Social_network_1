import React from 'react';

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const days = [];
for(let i=1; i<=31; i++){
  if(i<10){
    i= '0'+ i;
  }
  days.push(i)
}

const years = []
for (var i = 2019; i>=1900; i--) {
  years.push(i)
}



export let listDays = days.map((item, key) =>{
  return <option value={item} key={key}>{item}</option>
})
export let listMonths = months.map((item,key) =>{
  key++;
  if (key < 10){
    key= '0'+key;
  }
  return <option value={key} key={key}>{item}</option>
})
export let listYears = years.map((item,key) =>{
  return <option value={item} key={key}>{item}</option>
})

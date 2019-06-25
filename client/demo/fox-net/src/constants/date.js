import React from 'react';

const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

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
  return <option value={item} key={key}>{item}</option>
})
export let listYears = years.map((item,key) =>{
  return <option value={item} key={key}>{item}</option>
})

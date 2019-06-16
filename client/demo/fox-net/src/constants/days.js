const days = [];
for(let i=1; i<=31; i++){
  if(i<10){
    i= '0'+ i;
  }
  days.push(i)
}

export default days;


document.getElementById('calc_btn').addEventListener('click', () => {
  const jp_score = document.getElementById('japanese_score').value;
  const mt_score = document.getElementById('math_score').value;
  const eg_score = document.getElementById('english_score').value;


  const sum =parseInt(jp_score)+parseInt(mt_score)+parseInt(eg_score);
  const avg =(parseInt(jp_score)+parseInt(mt_score)+parseInt(eg_score))/3;


  console.log(jp_score)
  console.log(mt_score)
  console.log(eg_score)
  console.log(sum)
  console.log(avg)



  document.getElementById('sum_score').textContent = sum;
  document.getElementById('avg_score').textContent = avg;
});

document.getElementById('clear_btn').addEventListener('click', () => {

  document.getElementById('sum_score').textContent = "";
  document.getElementById('avg_score').textContent = "";
  const jp_score = document.getElementById('japanese_score').value=0;
  const mt_score = document.getElementById('math_score').value=0;
  const eg_score = document.getElementById('english_score').value=0;
});
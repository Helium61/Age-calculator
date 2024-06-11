// let userInput=document.getElementById("dob");
// userInput.max=new Date().toISOString().split("T")[0];
// let result=document.getElementById("result");

// function calculateAge(){
//     let birthDate=new Date(userInput.value);
//     let d1= birthDate.getDate();
//     let m1 = birthDate.getMonth()+1;
//     let y1= birthDate.getFullYear();

//     let today=new Date();

//     let d2= birthDate.getDate();
//     let m2 = birthDate.getMonth()+1;
//     let y2= birthDate.getYear();

//     let d3,m3,y3;
//     y3=y2-y1;
//     if (m2>=m1) {
//         m3=m2-m1;
//     }else{
//         y3--;
//         m3=12+m2-m1;
//     }if (d2>=d1) {
//         d3=d2-d1;
//     }else{
// m3--;
// d3=getDaysInMonth(y1,m1)+d2-d1
//     }if (m3<0) {
//         m3=11;
//         y3--;
//     }
//     result.innerHTML=`You are ${y3} Years,${m3} month and ${d3} days old`;
//     function getDaysInMonth(year,month){
//         return new Date(year,month,0).getDate();
//     }
// }

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (dobInput === "") {
        document.getElementById('result').innerText = "Please select a date.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust months and years if needed
    if (ageDays < 0) {
        // Borrow days from previous month
        ageMonths--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // last day of previous month
        ageDays += prevMonth.getDate();
    }

    if (ageMonths < 0) {
        // Borrow months from previous year
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}


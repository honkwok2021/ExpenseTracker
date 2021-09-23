class ExpenseObject{
        
    constructor(e, d, a){
      
      this.expenseDescription = e;
      this.dateObject = d;
      this.amount = a;
    }
  }
    function clearHistory(){
        localStorage.clear();
    }
    const createDate = flatpickr("#start",{
        dateFormat:"d-m-Y ",
    });

    let addButton = document.getElementById("add");
    let listContainer=document.getElementById("listContainer");
    let inputField= document.getElementById("inputField");
    let dateInput = document.getElementById("start");
    let amountField = document.getElementById("money");
    let total = document.getElementById("total");
    let totalAmount = parseFloat(total.innerHTML) || 0;
    

    addButton.addEventListener('click', function(){
        if(!inputField.value || !dateInput.value || !amountField.value){
            alert("please do not leave blank in any field");
            return;
        }

        var newRow = document.createElement('tr');
        var expense = document.createElement('td');
        var expenseDate = document.createElement('td');
        var expenseAmount = document.createElement('td');
        var deleteButton = document.createElement('button');
    
        
        deleteButton.innerHTML="X";

        let expenseStuff = new ExpenseObject (inputField.value,dateInput.value,amountField.value )
       
        expense.innerHTML = expenseStuff.expenseDescription; 
        expenseDate.innerHTML =  expenseStuff.dateObject;
        expenseAmount.innerHTML = expenseStuff.amount;
        listContainer.appendChild(newRow);
        newRow.appendChild(expense);
        newRow.appendChild(expenseDate);
        newRow.appendChild(expenseAmount);
        newRow.appendChild(deleteButton);
       
        
        inputField.value = "";
        amountField.value="";
        
        
        
        totalAmount += parseFloat(expenseAmount.innerHTML);
        total.innerHTML ="Total: "+ totalAmount.toFixed(2);
       
        
        deleteButton.addEventListener('click', function(){
            newRow.removeChild(expense);
            newRow.removeChild(expenseDate);
            newRow.removeChild(expenseAmount);
            newRow.removeChild(deleteButton);
            totalAmount -= parseFloat(expenseAmount.innerHTML);
            total.innerHTML ="Total: "+ totalAmount.toFixed(2);
        })
    })

    function exportReportToExcel() {
        let table = document.getElementsByTagName("table"); 
        TableToExcel.convert(table[0], { 
            name: `export.xlsx`, 
            sheet: {
            name: 'Sheet 1' 
            }
        });
    }
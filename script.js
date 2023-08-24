function atmOperation(){ 
    //if pin is correct
    const pin=1234;
    const pinVerify = document.querySelector("#pinCorrect").value;
    if(pinVerify == pin){
        let option = Number(prompt(`Welcome to Access Bank
        Ejiba Sandra Chisom,
        1.>Withdrawal               4.>QuickTeller
        2.>Check Balance           5.>Send Money 
        3.>Change Pin               6.>Deposit 
        `));

            //if Option 1 is selected (Withdrawal)
            if(option === 1){
                let accountType = Number(prompt("Select Account type  \n 1.> Savings \n2.> Current"))
            //-----------------------------------------------------
                if(accountType === 1){
                    let amount = Number(prompt(`Select amount
                    3.> 5000             1.> 1000
                    4.> 10000            2.> 2000   
                    `));
                
                if(amount === 1){
                    alert(`Please wait.. Transaction processing
                      ` );
                }
            }
            //-------------------------------------------------------
            else if(accountType === 2){
                let amount = Number(prompt(`Select amount
                    3.> 5000             1.> 1000
                    4.> 10000            2.> 2000   
                    `));
                
                if(amount === 1){
                    alert(`Please wait...........
                    take your cash  ` );
                }
            }
            //-------------------------------------------------
            else{
                alert("Choose a valid option");
            }
        }

        //if Option 2 is Selected (Check Balance)
        if (option === 2){
            let accountType = Number(prompt("Select account type \n1.> Savings \n2.> Current"));
            if (accountType === 1){
                alert(" 0059XXXXXX42 \n #2,000,000.00");
            }
            else if (accountType === 2){
                alert(" 0059XXXXXX89 \n #12,000,000,.00");
            }
            
            else{
                alert("Choose a valid option");
            }
        }
        //-------------------------------------------------------
        // if Option 3 is selected (Change PIN)
         if(option === 3){
            let pinCheck = Number(prompt("Enter Old Pin "));
            //--------- pin Check-------------
            if(pinCheck === pin){
                let newPin = Number(prompt("Enter New Pin"));
                alert("PIN changed successfully ");
            }
            else{
                alert("Old pin incorrect");
            }
        }

        }
        // When wrong pin is entered
        else{
            alert("incorrect pin");
        }
    }
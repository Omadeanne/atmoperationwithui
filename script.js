function atmOperation() {
    // if pin is correct
    const pin = 1234;
    const pinVerify = Number(document.querySelector("#pinCorrect").value);
    
    if (pinVerify === pin) {
        let option;
      do{ option = Number(prompt(`Welcome to Access Bank
          Ejiba Sandra Chisom,
          1.>Withdrawal               4.>QuickTeller
          2.>Check Balance           5.>Loan
          3.>Change Pin               6.>Exit
          `));
  
      switch (option) {
        case 1:
          const accountTypeWithdrawal = Number(prompt("Select Account type  \n 1.> Savings \n2.> Current"));
          switch (accountTypeWithdrawal) {
            case 1:
              const amountWithdrawal1 = Number(prompt(`Select amount
                      3.> 5000             1.> 1000
                      4.> 10000            2.> 2000   
                      `));
              if (amountWithdrawal1 === 1) {
                alert(`Please wait.. Transaction processing`);
              }
              break;
            case 2:
              const amountWithdrawal2 = Number(prompt(`Select amount
                      3.> 5000             1.> 1000
                      4.> 10000            2.> 2000   
                      `));
              if (amountWithdrawal2 === 1) {
                alert(`Please wait...........
                      take your cash`);
              }
              break;
            default:
              alert("Choose a valid option");
          }
          break;
        case 2:
          const accountTypeBalance = Number(prompt("Select account type \n1.> Savings \n2.> Current"));
          switch (accountTypeBalance) {
            case 1:
              alert(" 0059XXXXXX42 \n #2,000,000.00");
              break;
            case 2:
              alert(" 0059XXXXXX89 \n #12,000,000,.00");
              break;
            default:
              alert("Choose a valid option");
          }
          break;
        case 3:
          const pinCheck = Number(prompt("Enter Old Pin "));
          alert("PIN changed successfully");
          break;
        case 4:
          alert(" not yet availabl,try again later");
          break;
        case 5:
          alert(" not yet available,try again later");
          break;
        case 6:
            alert("Exiting transaction. Thank you for using Access Bank.");
            break;
          default:
          alert("Choose a valid option");
      }
     } while(option !== 6);
    } else {
      alert("incorrect pin");
    }
  }
  
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            document.getElementById("login_button").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "flex";
            })
                        
            document.querySelector(".close").addEventListener("click", function(){
                document.querySelector(".popup").style.diplay = "none";
            })
            
            
            var attempt = 3; //Variable to count number of attempts
            function validation(){
                var username = document.getElementById("username").value;
                var password = document.getElementById("password").value;
                if(username === "xxx" && password === "nnn"){
                    alert("Login successfully");
                    window.location="swap.html";
                    return false;
                }
                else{
                    attempt--;
                    alert("You have left "+attempt+" attempt;");
                    if(attempt ===0){
                        document.getElementById("username").disabled=true;
                        document.getElementById("password").disabled=true;
                        document.getElementById("submit").disabled=true;
                        return false;
                    }
                }
            }


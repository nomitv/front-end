function contactScript() {
  			 	var fname=document.getElementById("fname");
  			 	var lname=document.getElementById("fname");
				var email=document.getElementById("email");
  			 	var ncheck = /^[a-zA-Z]+$/;
				var echeck = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  			 	if(ncheck.test(fname.value) && echeck.test(email.value) && ncheck.test(lname.value)){
  			 		var firebaseConfig = {
					apiKey: "AIzaSyC3OKNJHfjVzRUTMhKZ6nUsiuKl4FkQwvY",
    				authDomain: "user-profile-form.firebaseapp.com",
    				databaseURL: "https://user-profile-form.firebaseio.com",
    				projectId: "user-profile-form",
    				storageBucket: "user-profile-form.appspot.com",
    				messagingSenderId: "372670904797",
    				appId: "1:372670904797:web:94b0158fa635fa1d"
  					};
  				
		  			firebase.initializeApp(firebaseConfig);
  					var b = firebase.database().ref("users");
        			$("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
        				var c = $("#username").val(),
            			d = $("#email").val(),
            			e = $("#fname").val(),
            			l = $("#lname").val(),
            			g = $("#address").val(),
            			h = $("#city").val(),
            			i = $("#state").val(),
            			j = $("#zip").val(),
            			k = $("#info").val(),
            			f = { username: c, email: d, fname: e, lname: l, address: g, city: h, state: i, zip:j, info:k};
            			localStorage["user"] = JSON.stringify(f);
        				return b.push(f).then(function(a) { 
            				$(".sucess").css("display", "block"), 
            					$(".sucess-none").css("display", "none") 
            			}),
            		!1 })
  			 	}
  			 	window.open("new_profile.html");  
			}
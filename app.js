// import { log } from "console";
// import { console } from "inspector";

// // detting up firebase with our website
// const firebaseApp = firebase.initializeApp({ 
//     apiKey: "AIzaSyDfWLjFjSDyOutvMJ3oyoUCRtjGChxnQWU",
//     authDomain: "fir-66eb1.firebaseapp.com",
//     projectId: "fir-66eb1",
//     storageBucket: "fir-66eb1.firebasestorage.app",
//     messagingSenderId: "927165518979",
//     appId: "1:927165518979:web:7592be0e6f81c7661ff7b6"
//  });
//    const db = firebaseApp.firestore();
//    const auth = firebaseApp.auth();
// //    sign up
// const signup  = ()=>{
//     const email = document.getElementById("email").value;
//     const password
//      = document.getElementById("password").value;
//     console.log( email ,password)
// ;   firebase.auth().createUserWithEmailAndPassword(email, password)
//      .then(( result ) =>{
//        // Signed in 
//        document.write (" signed up ")
//        console.log( result)
//        var user = userCredential.user;
//        // ...
//      })
//      .catch((error) => {
//        console.log(error.code)
//        console.log(error.massage)
//        // ..
//      });}    
// Function to validate the form inputs
document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
  
    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const message = document.querySelector("input[type='text']").value.trim();
    const consent = document.querySelector("input[type='checkbox']").checked;
  
    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }
  
    if (!consent) {
      alert("You must consent to the processing of personal data.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  
  // Functionality to toggle FAQ answers
  document.querySelectorAll(".one8 li").forEach((faq) => {
    faq.addEventListener("click", () => {
      alert(`You clicked: ${faq.textContent}`);
    });
  });
  
  // Adding a scroll-to-top button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "Top";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.padding = "10px";
  scrollToTopButton.style.backgroundColor = "rgb(247, 72, 154)";
  scrollToTopButton.style.color = "white";
  scrollToTopButton.style.border = "none";
  scrollToTopButton.style.borderRadius = "5px";
  scrollToTopButton.style.cursor = "pointer";
  document.body.appendChild(scrollToTopButton);
  
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Dynamic date in the footer
  document.querySelector("footer").innerHTML += ` | © ${new Date().getFullYear()} All Rights Reserved.`;
  
  // Highlight active navigation link
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelectorAll("nav a").forEach((item) => {
        item.style.color = "black";
      });
      link.style.color = "rgb(218, 24, 114)";
    });
  });
  const cart = [];

  function addToCart(productName, productPrice) {
      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.name === productName);
      
      if (existingProduct) {
          existingProduct.quantity++;
      } else {
          cart.push({ name: productName, price: productPrice, quantity: 1 });
      }

      updateCart();
  }

  function updateCart() {
      const cartItemsContainer = document.getElementById('cart-items');
      const cartTotalContainer = document.getElementById('cart-total');

      // Clear the current cart items
      cartItemsContainer.innerHTML = '';

      let total = 0;

      // Populate cart items
      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `
              <span>${item.name} (x${item.quantity})</span>
              <span>$${item.price * item.quantity}</span>
          `;
          cartItemsContainer.appendChild(cartItem);

          total += item.price * item.quantity;
      });

      // Update total price
      cartTotalContainer.textContent = `Total: $${total}`;
  }

  async function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(auth, email, password);
        alert('Sign in successful!');
        console.log(userCredential.user);
        // Redirect to another page or perform other actions
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Attach the function to the button
document.querySelector('.signin-btn').addEventListener('click', signIn);

  
const $id = document.getElementById.bind(document);


let setA, setB;

function Test(){
   let fstNumber = $id("fst").value;
   setA = [...fstNumber]
   $id("fst").value = null;                                                                                                                                 
}

 function Test2() {
   let sndNumber = $id("snd").value;
   setB = [...sndNumber]
   $id("snd").value = null;
 }


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("btn1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = 
   function findUnion(){
    let union = setA.concat(setB)
  
  //removing duplicates if any
  let duplicatesRemoved = [...new Set(union)]
  
  //converting elements to integers before sorting
  let finalUnion = duplicatesRemoved.map(num => parseInt(num))
  
  //now finally sort
  finalUnion.sort((a, b) => a - b)
  
  $id("display").innerHTML = `Union Set = { ${finalUnion.join(' ')} }`
   modal.style.display = "block";

    }
 
  
  function findIntersect(){
    let intersect = []
    
    //loop through A, if B contains any element from A
    //and that element is not in the *intersect array*, push it
    setA.filter((value)=>{
      if(setB.indexOf(value)!== -1){
        intersect.push(value);
         
    $id("display").innerHTML = `Intersection = { ${intersect.join(" ") || null} }`
      }
    })
   
    modal.style.display = "block";
  }

  function findSub(){
    setA_stringed = setA.join("")
    setB_stringed = setB.join("")
    
    A_is_sub_of_B = setB_stringed.indexOf(setA_stringed) !== -1
    B_is_sub_of_A = setA_stringed.indexOf(setB_stringed) !== -1
    
    if(A_is_sub_of_B){
      $id("display").innerHTML = "set A is a subset of B"
    }else if(B_is_sub_of_A){
      $id("display").innerHTML = "set B is a subset of A"
    }else{
        $id("display").innerHTML = "There is no subset"
    }
    modal.style.display = "block";
  }
    


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



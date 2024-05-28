function copycode(){
    let boxColor = document.querySelector(".boxColor").innerText
    let succesCopy = navigator.clipboard.writeText(boxColor)
    if (succesCopy) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Copied code",
            showConfirmButton: false,
            timer: 1000
          });
} 
}
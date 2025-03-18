document.getElementById("hackButton").addEventListener("click", function() {
    // টেক্সট পরিবর্তন করা
    document.getElementById("text").innerText = "You Have Been Hacked";
    document.getElementById("text2").innerText = "";
    document.getElementById("text3").innerText = "";

    // গ্লিচ ইফেক্ট যুক্ত করা
    document.querySelector(".container").classList.add("glitch");

    // লোগো চেঞ্জ করে GIF করা
    document.body.style.setProperty("--bg-image", "url('https://raw.githubusercontent.com/SadiAlSabbir/Who-Am-I/main/src/Next.gif')");
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/SadiAlSabbir/Who-Am-I/main/src/Next.gif')";

    // বাটন হাইড করা
    this.style.display = "none";

    // কনসোলে মেসেজ দেখানো
    console.log("You Have Been Hacked! Don't Try To Know Me");
});

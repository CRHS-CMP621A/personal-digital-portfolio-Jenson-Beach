function instagramLink(){
    window.open('https://www.instagram.com', '_blank');
}

function snapchatLink(){
    window.open('https://www.snapchat.com', '_blank');
}

function discordLink(){
    window.open('https://discord.com', '_blank');
}
document.querySelector(".instagram").addEventListener("click", instagramLink)
document.querySelector(".snapchat").addEventListener("click", snapchatLink)
document.querySelector(".discord").addEventListener("click", discordLink)
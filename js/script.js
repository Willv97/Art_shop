// Sample data for your art pieces, you can replace this with your own data
const artPieces = [
    {
        title: "Broly",
        description: "Broly the Legendary Super Sayian",
        image: "images/Broly0001.png", // Provide the correct path to your image
        price: "$100"
    },
    {
        title: "Art Piece 2",
        description: "Description for Art Piece 2",
        image: "images/ue_vegeta.png", // Provide the correct path to your image
        price: "$230"
    },
    // Add more art pieces as needed
];


// Function to display art pieces on the webpage
function displayArtGallery() {
    const gallery = document.querySelector(".art-gallery");

    artPieces.forEach((artPiece) => {
        const artCard = document.createElement("div");
        artCard.classList.add("art-card");

        const image = document.createElement("img");
        image.src = artPiece.image;
        image.alt = artPiece.title;

        const title = document.createElement("h2");
        title.textContent = artPiece.title;

        const description = document.createElement("p");
        description.textContent = artPiece.description;

        const price = document.createElement("p");
        price.textContent = `Price: ${artPiece.price}`;

        artCard.appendChild(image);
        artCard.appendChild(title);
        artCard.appendChild(description);
        artCard.appendChild(price);

        gallery.appendChild(artCard);
    });
}

// Call the function to display the art gallery when the page loads
window.onload = displayArtGallery;

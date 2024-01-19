function findCaliforniaCafes(searchTerm) {
    
    const cafes = [
        {
            "name": "Ashley's Cafe",
            "place_id": "12hydbdf76sljfts87sbfis"
        },
        {
            "name": "Avenue Bakery Cafe",
            "place_id": "jahgde7wgdiau8ewsahgosd"
        },
        {
            "name": "Avenue Cafe",
            "place_id": "skjd86svvfdrsv55svbvf3f"
        },
        {
            "name": "Bazaar Cafe",
            "place_id": "kjk234g4gcvfx8usg1l33pi"
        },
        {
            "name": "California Chicken Cafe",
            "place_id": "12hydbdf76sljfts87sbfis"
        },
        {
            "name": "Hi-Lo Cafe",
            "place_id": "mjdhgetr4pojfyts22fzfsh"
        },
        {
            "name": "Philz Coffee",
            "place_id": "urhw3837ehalod7w02b7835"
        }
    ];

    const places = [
        {
            "id": "12hydbdf76sljfts87sbfis",
            "street_no": "1B",
            "locality": "Macarthur Blvd",
            "postal_code": "20619",
            "lat": "38.1781 N",
            "long": "118.4171 W"
        },
        {
            "id": "jahgde7wgdiau8ewsahgosd",
            "street_no": "60H",
            "locality": "Solomos Island Road",
            "postal_code": "20688",
            "lat": "36.7783 N",
            "long": "119.4179 W"
        },
        
    ];


    const matchingCafes = cafes.filter(cafe => cafe.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Mapping matching cafes to their corresponding places
    const results = matchingCafes.map(cafe => {
        const placeDetails = places.find(place => place.id === cafe.place_id);
        return { cafe, placeDetails };
    });

    return results;
}


const searchTerm = "Cafe";
const searchResults = findCaliforniaCafes(searchTerm);
console.log(searchResults);
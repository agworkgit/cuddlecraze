function FavoritePetsContainer({ petsData }) {
    return (
        <div>
            {petsData.map((pet) => {
                if (pet.favorites) {
                    return (
                        <div key={pet.id}>
                            <h3>{pet.name}</h3>
                            <img src={pet.image} alt={pet.name} />
                            <p>{pet.description}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default FavoritePetsContainer;
import React from 'react';
import Pet from './Pet';

const Results = ({pets}) => {
    return (
        <div className="srarch">
         {pets.length === 0 ? (
                <h1>No Pets Found</h1>
            ) : (
                    pets.map(pet => (
                        <Pet
                            animal={pet.type}
                            key={pet.id}
                            name={pet.name}
                            breed={pet.breed}
                            media={pet.media}
                            location={`${pet.contact.address.city}, ${
                                pet.contact.address.state
                        }`}
                            id={pet.id}
                        />
                    ))
            )}
        </div>
    )
}


export default Results;
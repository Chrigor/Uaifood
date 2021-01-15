import React from 'react';

import { Container, Cover } from './styles';


function CardRestaurant({ restaurant }) {
    const { restaurant: data } = restaurant;

    return <Container>
        <Cover photo={data.thumb} />
        <div className="content">
            <div>
                <h1>{data.name.substring(0, 20) + '...'}</h1>
                <h3>{data.location.address.substring(0, 22) + '...'}</h3>
                <span>
                    {new Array(5).fill(5).map((_, indice) => {
                        if (indice < Math.ceil(data.user_rating.aggregate_rating)) {
                            return <i class="fas fa-star"></i>
                        } else {
                            return null;
                        }
                    }).filter((ele) => ele != undefined)}
                </span>
            </div>
            <div className="content-buttons">
                <button className="button-highlight">
                    <i className="fas fa-user-friends"></i>
                    {data.currency}
                    {data.average_cost_for_two}
                </button>
                <button className="button-outlight">
                    {data.cuisines.substring(0, 14) + '...'}
                </button>
            </div>
        </div>
    </Container>;
}

export default CardRestaurant;
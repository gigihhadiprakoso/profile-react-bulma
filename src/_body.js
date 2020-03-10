import React from 'react';

function Body(){
    return (
        <section class="hero is-primary is-large">
            <div class="hero-body">
                <div class="container">
                    {/* <h1 class="title">Primary bold title</h1>
                    <h2 class="subtitle">Primary bold subtitle</h2> */}
                    <figure class="image is-128x128" style={{marginRight:'auto',marginLeft:'auto'}}>
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                </div>
            </div>
        </section>
    );
}
export default Body;
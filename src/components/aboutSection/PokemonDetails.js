
import { useParams } from "react-router-dom";
import commentStyles from './comment.module.css'
import styles from './aboutSection.module.css';
import { useState } from 'react';


export const PokemonDetails = ({ pokemons }) => {

    const { showMeThatPokemon } = useParams()
    const pokemon = pokemons.find(x => x._id === showMeThatPokemon)            //pokemon = от масива с pokemons търся този на който _id (което идва от сървъра) е равно на нашия useParam 

    const [userComment, setUserComment] = useState({
        username: '',
        comment: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        const result = `${userComment.username}: ${userComment.comment}`
    }

    const onChange = (e) => {
        setUserComment(state => ({
            ...state,
            [e.target.name]: e.target.value                                                   //name - защото ги връзвам(боравим) чрез тага name='' в html-a
        }));
    };

    const [error, setError] = useState({
        username: '',
        comment: '',
    });


    return (
        <section>


            <div className={styles["pokemon-details"]}>
                <h1>{pokemon.title}</h1>
                <p>{pokemon.price}</p>
                <img src={pokemon.imageUrl} />
            </div>


            <article className={commentStyles["create-comment"]}>
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="your name"
                        onChange={onChange}
                        // onBlur={validateUsername}
                        value={userComment.username}
                    />

                    {error.username &&
                        <div style={{ color: 'red' }}>{error.username}</div>
                    }

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChange}
                        value={userComment.comment}
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>

        </section>

    )
}


//What is useParams React router?
// The useParams() hook is a React Router hook that allows you to access the parameters of the current URL.
// This can be useful if you want to dynamically render content based on the URL parameters. For example,
// if you have a blog application, you may want to render different articles based on the article ID in the URL
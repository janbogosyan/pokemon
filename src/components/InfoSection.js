import { Link } from "react-router-dom"

export const InfoSection = () => {

    // const instagramUrl = 'http://localhost:3000/https://www.instagram.com/'
    // const newUrl = instagramUrl.replace('~https://(?![^" <>]*(?:jpg|png|gif))[^" <>]+~')
    // console.log(instagramUrl);
    // console.log(newUrl)

    return (
        <section className="info_section layout_padding">
            <div className="container">
                <div className="info_social">

                    <div>
                        <Link to='#'>
                            <img src="images/insta.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div>
                    <p>
                        Follow us on Instagram for more Updates
                    </p>
                </div>
            </div>
        </section>

    )
}
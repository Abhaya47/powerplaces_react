// import "../css/aboutme.css"
import aboutImage from "../assets/aboutme.jpg"
import f from "../assets/i.jpg"

const AboutUs=()=>(
    <>
    <div
      className="h-[50vh] w-full bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${f})` }}
    ></div>
    <div className="h-full px-6 md:px-20 py-20 bg-slate-800 text-zinc-300 flex flex-col items-center justify-center ">
        <div className="mb-10">
            <h1 className="text-4xl font-bold text-cyan-400">About Us</h1>
            <div className="mt-2 w-16 h-1 bg-cyan-500 rounded-full text-center"></div>
        </div>

        <article className="space-y-6 leading-relaxed max-w-4xl text-lg text-justify">
            <p>
            Our goal goes beyond collecting cultural practices from Nepal, Tibet, Bhutan, and India including both tangible and intangible heritages. We aim to preserve traditions and living practices passed through generations, honoring the past, living in the present, and protecting the future.
            </p>

            <p>
            From skills and rituals to everyday life practices and events, we recognize that these traditions form the soul of communities. These are the intangible heritages that define a people, a culture, and a way of life.
            </p>

            <p>
            We are a group of friends striving to reflect the cultural richness of our people not as observers, but as participants in that identity. Our mission is to share this beauty with the world and communicate its meaning to future generations.
            </p>

            <p>
            In this part of the world, culture is not isolated it is an interconnected living heritage shared across diverse communities. We believe in honoring and continuing these stories, together.
            </p>
        </article>
    </div>

    </>
);

export default AboutUs;
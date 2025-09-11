// src/Home.tsx
import TeamPic from '../assets/Team_2013-14.jpg'
import PoseidonPic from '../assets/Poseidon_Crate.jpg'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Team Picture */}
      <section className="py-8 bg-white shadow-md">
        <h1 className="text-center">
          <a href={TeamPic} target="_blank" rel="noopener noreferrer">
            <img
              src={TeamPic}
              alt="Team picture"
              className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </a>
        </h1>
      </section>

      {/* Main Content */}
      <section className="main max-w-5xl mx-auto py-12 px-4 md:px-0 grid gap-12 md:grid-cols-2">
        {/* Prove Article */}
        <article className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Pennsylvania ROV Engineers</h2>
          <p className="mb-4">
            We are a group of high school homeschoolers. We have participated in the MATE ROV
            Competition since the 2011-2012 school year. We learned a lot that first year and
            have improved each year since then. Our team itself is small, consisting of about
            6 members each year. We aren't able to build the biggest and the best ROV (Remotely
            Operated Vehicle), but we put time into it and build ROVs that challenge the
            competition. Our team no longer competes in the MATE ROV Competition. Check
            out our social media pages (links in the address bar at the bottom of the page) for
            posts on what we did while we competed.
          </p>
          <p>
            Check out the Team page for information about this year's team members. Visit the
            Media page for photos and videos of the team in action, both in our garage at home,
            and at International Competitions across the country. Details about each year's ROV
            can be found under the Poseidon tab. Finally, for budget information, check out the
            Finance tab. Thanks for visiting!
          </p>
        </article>

        {/* MATE Article */}
        <article className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Marine Advanced Technology Education Center</h2>
          <p className="mb-4">
            "The Marine Advanced Technology Education (MATE) Center is a national partnership of
            organizations working to improve marine technical education and in this way help to
            prepare America's future workforce for ocean occupations." &mdash;{" "}
            <cite>
              The "About" section on the{" "}
              <a
                href="http://www.marinetech.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                MATE website
              </a>.
            </cite>
          </p>
          <p>
            The MATE Center organizes the MATE ROV Competition that we have participated in since 2012.
            The competition consists of regional competitions throughout the world, winners of which
            are invited to an international competition held in mid-June. Each year the MATE Center
            chooses a theme for the competition and builds a set of missions that revolve around that
            theme.  Although the theme varies, missions typically require teams to build ROVs capable
            of moving objects, taking measurements, and observing and identifying objects. In
            addition, the competition requires teams to document their vehicle with a 20-page
            technical documentation, to give a presentation of their ROV to a panel of judges, and
            to create a poster display.
          </p>
        </article>
      </section>

      {/* Poseidon Picture */}
      <section className="py-8 bg-white shadow-md">
        <h1 className="text-center">
          <a href={PoseidonPic} target="_blank" rel="noopener noreferrer">
            <img
              src={PoseidonPic}
              alt="Picture of our ROV"
              className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </a>
        </h1>
        <h3 className="text-center mt-4 text-lg font-medium text-gray-600">
          Poseidon Mk. 3 opening a crate underwater
        </h3>
      </section>
    </div>
  );
}

export default Home

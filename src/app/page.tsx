import Image from "next/image";
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col gap-24 pt-32 w-6/12 ">
          <section className="">
            <h2 className="text-5xl font-bold">Welcome to Emil Kronholm's personal website!</h2>
            <p>
              My personal goal is to become one of the best developer of my time.
              This goal is far from realistic and will (probably) never come true;
              but I think it keeps me learning, staying positive, and motives me to
              one day make a groundbreaking innovation! <br /><br />
              I hope you will enjoy you stay!
            </p>
          </section>
          <section>
            <h2 className="text-5xl font-bold">My biggest achievement in life so far</h2>
            <ul>
              <li>Solve a Rubik's cube under 10 seconds. (sub-15 ao5)</li>
              <li>80 000 kr turn over (2022-2023)</li>
              <li>Being accepted into my dream school JTH</li>
              <li>Playing as Libero in JUSA Volleyball Team 2023</li>
              <li>Traveled to Barcelona and swam in the ocean</li>
              <li>Running 10 km</li>
              <li>Interning at Spotify</li>
              <li>Reaching 9000 trophies at Clash Royale (as a free player)</li>
            </ul>
          </section>

          <section id="projects">
            <h2 className="text-5xl font-bold">Projects</h2>
            <p>Here is an overview of my major projects.</p>

            <div className="project">
              <h4 className="text-2xl font-medium">Self-hosting and Server Owner (2025-Ongoing)</h4>
              <p>
                Having an ubunutu server (vps) self hosting apps, websites (like this one), and rest apis. Managing security, pipelines and monitoring.
              </p>
            </div>

            <div className="project">
              <h4 className="text-2xl font-medium">Online Battleship Game - Android & Jetpack compose (2024)</h4>
              <p>
                Built with Kotlin, Jetpack Compose, and Firebase Firestore. Play
                with your friends with a seamless online experience.
              </p>
              <a href="https://github.com/EmilKronholm/BattleShips"
              >Battleship Repository</a>
            </div>

            <div className="project">
              <h4 className="text-2xl font-medium">Paint App (2024)</h4>
              <p>
                Built with C++ and the QT ui-framework. Insert shapes, move them
                around, scale/rotate, move up/down in layers, and change colors.
              </p>
            </div>

            <div className="project">
              <h4 className="text-2xl font-medium">Roll The Boll - 2D chill puzzle game (2022)</h4>
              <p>
                Made with C# and Unity. Self-produced music and self-made assets. Sit
                back and relax as you strategically drag-and-drop bouncy objects to
                guide the rolling ball towards the goal! Can you make it?
              </p>
            </div>

            <div className="project">
              <h4 className="text-2xl font-medium ">Kill or Die - 3D FPS Game (2021)</h4>
              <p>
                Made with C# and Unit, self-produced music and outsourced assets.
                Run around a square map, avoid zombies and collect
                ammunition. Shoot the enemies with gun or rifle to survive.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div >
  );
}

import React from 'react';
    import Particles from "react-tsparticles";
    import { loadFull } from "tsparticles";

    const Snowfall = () => {
      const particlesInit = async (main: any) => {
        await loadFull(main);
      };

      return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 3,
                random: true,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                outModes: {
                  default: "out",
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
            detectRetina: true,
          }}
        />
      );
    };

    export default Snowfall;

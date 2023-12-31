import React, { useEffect, useRef } from "react";

const MouseParticleTrail = () => {
  const canvasRef = useRef(null);
  const maxDistance = 90;

  // mouse movement issue
  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  let particles = [];
  const devicePixelRatio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  const randomColor = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };
  var hue = 0;
  const createParticle = (x, y) => {
    // adjust the particle size and speed according to the canvas scale
    const size = 3 / devicePixelRatio;
    const speedX = (Math.random() * 2 - 1) / devicePixelRatio;
    const speedY = (Math.random() * 2 - 1) / devicePixelRatio;
    const color = `hsl(${hue},100%,50%)`;

    return { x, y, size, color, speedX, speedY };
  };
  const connectParticles = () => {
    //these two for loops are used for comparing
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        //calculating the distance between the two particles
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance <= maxDistance) {
          const opacity = 1 - distance / maxDistance; //this is used to calculate the opacity of the line farhter away leseser opacity
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particles[i].color;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };
  const animate = () => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hue++;
    connectParticles();
    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.size -= 0.05;
      if (particle.size <= 0.3) {
        particles.splice(index, 1);
      }

      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  animate();
  // change the handleMouseMove function to use the document coordinates
  const handleMouseMove = (event) => {
    // subtract the canvas offset from the document coordinates
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let i = 0; i < 1; i++) {
      particles.push(createParticle(x, y));
    }
  };

  // add a function to handle window resize
  const handleResize = () => {
    // update the canvas width and height
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    // reset the canvas scale to the device pixel ratio
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    // redraw the particles on the canvas
    // animate();
  };

  // add the mousemove event listener to the document
  document.addEventListener("mousemove", handleMouseMove);
  // add an event listener for window resize
  window.addEventListener("resize", handleResize);

  return () => {
    // remove the mousemove event listener from the document
    document.removeEventListener("mousemove", handleMouseMove);
    // remove the event listener for window resize
    window.removeEventListener("resize", handleResize);
  };
}, []);



  

  return <canvas ref={canvasRef} className="fixed w-full h-full z-50 pointer-events-none" />;
};

export default MouseParticleTrail;


  // const handleResize = () => {
  //   const rect = canvas.getBoundingClientRect();
  //   canvas.width = rect.width * devicePixelRatio;
  //   canvas.height = rect.height * devicePixelRatio;
  //   ctx.scale(devicePixelRatio, devicePixelRatio);
  // };

  // handleResize();

    
  // window.addEventListener("resize", handleResize);

  // return () => {
  //   window.removeEventListener("resize", handleResize);
// };
  // className="fixed bg-black inset-0 w-full h-full  z-50 border border-red-700 border-solid"
// {children}

/*
useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  let particles = [];
  const devicePixelRatio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  const randomColor = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };
  var hue = 0;
  const createParticle = (x, y) => {
    const size = 3;
    const color = `hsl(${hue},100%,50%)`;
    const speedX = Math.random() * 2 - 1;
    const speedY = Math.random() * 2 - 1;

    return { x, y, size, color, speedX, speedY };
  };
  const connectParticles = () => {
    //these two for loops are used for comparing
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        //calculating the distance between the two particles
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance <= maxDistance) {
          const opacity = 1 - distance / maxDistance; //this is used to calculate the opacity of the line farhter away leseser opacity
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particles[i].color;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          }
      }
    }
  };
  const animate = () => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hue++;
    connectParticles();
    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.size -= 0.05;
      if (particle.size <= 0.3) {
        particles.splice(index, 1);
      }
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };
  animate();
  const handleMouseMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    // divide the mouse coordinates by the device pixel ratio
    const x = event.clientX / devicePixelRatio - rect.left;
    const y = event.clientY / devicePixelRatio - rect.top;

    for (let i = 0; i < 1; i++) {
      particles.push(createParticle(x, y));
    }
  };
  // add a function to handle window resize
  const handleResize = () => {
    // update the canvas width and height
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    // redraw the particles on the canvas
    animate();
  };

  canvas.addEventListener("mousemove", handleMouseMove);
  // add an event listener for window resize
  window.addEventListener("resize", handleResize);

  return () => {
    canvas.removeEventListener("mousemove", handleMouseMove);
    // remove the event listener for window resize
    window.removeEventListener("resize", handleResize);
  };
}, []);
 */


// 2nd
/* 
useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    const randomColor = () => {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);

      return `rgb(${r},${g},${b})`;
    };
    var hue = 0;
    const createParticle = (x, y) => {
      const size = 3;
      const color = `hsl(${hue},100%,50%)`;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * 2 - 1;

      return { x, y, size, color, speedX, speedY };
    };
    const connectParticles = () => {
      //these two for loops are used for comparing
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          //calculating the distance between the two particles
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance <= maxDistance) {
            const opacity = 1 - distance / maxDistance; //this is used to calculate the opacity of the line farhter away leseser opacity
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particles[i].color;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue++;
      connectParticles();
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= 0.05;
        if (particle.size <= 0.3) {
          particles.splice(index, 1);
        }

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animate();
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      // divide the mouse coordinates by the device pixel ratio
      const x = event.clientX / devicePixelRatio - rect.left;
      const y = event.clientY / devicePixelRatio - rect.top;
      // const x = event.clientX - rect.left;

      // const y = event.clientY - rect.top;

      for (let i = 0; i < 1; i++) {
        particles.push(createParticle(x, y));
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
*/

// 1st handle resize
/* const handleResize = () => {
    // update the canvas width and height
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    // redraw the particles on the canvas
    animate();
  }; */

//create particle
  /* const createParticle = (x, y) => {
    const size = 3;
    const color = `hsl(${hue},100%,50%)`;
    const speedX = Math.random() * 2 - 1;
    const speedY = Math.random() * 2 - 1;

    return { x, y, size, color, speedX, speedY };
  }; */
  
// update for resize
  /*   useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  let particles = [];
  const devicePixelRatio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * devicePixelRatio;
  canvas.height = rect.height * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  const randomColor = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };
  var hue = 0;
 const createParticle = (x, y) => {
  // adjust the particle size and speed according to the canvas scale
  const size = 3 / devicePixelRatio;
  const speedX = (Math.random() * 2 - 1) / devicePixelRatio;
  const speedY = (Math.random() * 2 - 1) / devicePixelRatio;
  const color = `hsl(${hue},100%,50%)`;

  return { x, y, size, color, speedX, speedY };
};

  const connectParticles = () => {
    //these two for loops are used for comparing
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        //calculating the distance between the two particles
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance <= maxDistance) {
          const opacity = 1 - distance / maxDistance; //this is used to calculate the opacity of the line farhter away leseser opacity
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particles[i].color;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          }
      }
    }
  };
  const animate = () => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hue++;
    connectParticles();
    particles.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.size -= 0.05;
      if (particle.size <= 0.3) {
        particles.splice(index, 1);
      }
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };
  animate();
  const handleMouseMove = (event) => {
    const rect = canvas.getBoundingClientRect();
    // divide the mouse coordinates by the device pixel ratio
    const x = event.clientX / devicePixelRatio - rect.left;
    const y = event.clientY / devicePixelRatio - rect.top;

    for (let i = 0; i < 1; i++) {
      particles.push(createParticle(x, y));
    }
  };
  // add a function to handle window resize
 // add a function to handle window resize
const handleResize = () => {
  // update the canvas width and height
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  // reset the canvas scale to the device pixel ratio
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  // redraw the particles on the canvas
  // animate();
};


  canvas.addEventListener("mousemove", handleMouseMove);
  // add an event listener for window resize
  window.addEventListener("resize", handleResize);

  return () => {
    canvas.removeEventListener("mousemove", handleMouseMove);
    // remove the event listener for window resize
    window.removeEventListener("resize", handleResize);
  };
}, []); */
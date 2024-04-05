import Arrow from "../components/Arrow";
import React from "react";
import Presentazione from "../components/Presentazione";
// import Loader from "../components/Loader"; // loader component

function About() {
  return (
    <div>
      <h1 className="font-bold text-xl m-5">Benvenuto!</h1>
      <div className="mt-5 mb-10">
        <img src="https://images.unsplash.com/photo-1528214096798-37891d32174c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      </div>
      <div>
        <p className="m-5">
          Questo è <code>Borghi</code>: un progetto nato dal popolo per la
          rinascita dei borghi
        </p>
        <p></p>
        <p>Nasce per la rinascita delle piccole cose.</p>
        <p className=" m-4">
          Rivolto a tutti gli italiani che non smettono di crederci:
          <p className="text-xl font-bold m-3">
            imprenditori, creativi, nomadi digitali, freelance, sviluppatori e
            chi ne ha più ne metta.
          </p>
        </p>
        <p>A tutti quelli che hanno perso la fiducia in questo paese.</p>
        <p>
          A tutti quelli che vogliono vivere nei borghi e che sono stanchi dei
          ritmi delle metropoli.
        </p>
        <p>Dedicato a quelli che non vogliono abbandonare la propria terra.</p>
        <p className="text-l font-bold m-3">
          Dedicato a chi vuole una vita slow.
        </p>

        <a href={"/"}>
          <Arrow />
        </a>
      </div>
    </div>
  );
}

export default About;

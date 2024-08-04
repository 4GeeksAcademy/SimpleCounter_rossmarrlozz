import React, { useEffect, useState } from "react";
import { Clock } from "./clock.jsx";
import '../../styles/index.css';

const Home = () => {

	const [temporizador, setTemporizador] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setTemporizador(value => value + 1)
		}, 1000)
	}, [temporizador])

	return (
		<div className ="text-center">
			<contador className="formato">
				<Clock number={<p className="fa fa-clock"></p>} />
				<Clock number={Math.floor(temporizador / 100000) % 10} />
				<Clock number={Math.floor(temporizador / 10000) % 10} />
				<Clock number={Math.floor(temporizador / 1000) % 10} />
				<Clock number={Math.floor(temporizador / 100) % 10} />
				<Clock number={Math.floor(temporizador / 10) % 10} />
				<Clock number={Math.floor(temporizador % 10)} />
			</contador>
		</div>
	);
};

export default Home;
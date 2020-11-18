import React from "react";
import Head from "next/head";
import { Container } from "../styles/pages/Home";

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Home Page</title>
			</Head>

			<h1>Hello World</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
		</Container>
	);
}

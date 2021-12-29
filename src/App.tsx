import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Logo from "./images/logo.svg";
import Document from "./images/icon-document.svg";
import Folder from "./images/icon-folder.svg";
import Upload from "./images/icon-upload.svg";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const StyledDiv1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	width: 330px;
	height: 200px;
	background-color: var(--dark-blue);
	border-radius: 10px 120px 10px 10px;
	padding-left: 40px;
	> img {
		width: 150px;
	}

	> div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 15px;
		> div {
			width: 60px;
			height: 60px;
			padding: 20px;
			border-radius: 10px;
			background-color: var(--very-dark-blue);
		}
	}
`;
const StyledDiv2 = styled.div`
	display: flex;
	width: 330px;
	height: 150px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	background-color: var(--dark-blue);
	border-radius: 10px;
	color: var(--pale-blue);
	position: relative;
	> p {
		margin-top: 25px;
	}
	> div {
		display: flex;
		flex-direction: column;
		gap: 10px;

		input {
			cursor: pointer;
			appearance: none;
			width: 250px;
			height: 15px;
			border-radius: 20px;
			overflow: hidden;
			//** Create a border around the slider inner */
			box-shadow: 0 0 0 0.2em var(--very-dark-blue);
			background: var(--very-dark-blue);
			outline: none;
			::-webkit-slider-thumb {
				appearance: none;
				width: 15px;
				height: 15px;
				border-radius: 50%;
				border: 2px solid hsl(335, 100%, 65%);
				background-color: var(--pale-blue);
				//** Create a gradient on box-shadow */
				box-shadow: -220px 0 50px 100px hsl(6, 100%, 80%),
					-255px 10px 10px 250px hsl(335, 100%, 65%);
				/* box-shadow: --255px 10px 10px 250px hsl(335, 100%, 65%); */
			}
			::-moz-range-thumb {
				appearance: none;
				width: 15px;
				height: 15px;
				border-radius: 50%;
				border: 2px solid hsl(335, 100%, 65%);
				background-color: var(--pale-blue);
				box-shadow: -260px 0 0 250px hsl(335, 100%, 65%);
			}
		}
		> div {
			display: flex;
			justify-content: space-between;
			font-size: 0.9rem;
		}
	}
	.gb-left {
		position: absolute;
		bottom: -40px;
		text-align: center;
		background-color: var(--pale-blue);
		color: var(--very-dark-blue);
		border-radius: 10px;
		padding: 15px 25px;

		p {
			font-weight: 500;
			span {
				font-size: 3rem;
				font-weight: 700;
			}
		}
	}
`;

const App: FC = () => {
	const [state, setstate] = useState<number>(815);
	const handleChange = (e: ChangeEvent) => {
		const val = (e.target as HTMLInputElement).value;
		setstate(parseInt(val));
	};
	return (
		<StyledApp>
			<StyledDiv1>
				<img src={Logo} alt="Fylo" />
				<div>
					<div>
						<img src={Document} alt="Document" />
					</div>
					<div>
						<img src={Folder} alt="Folder" />
					</div>
					<div>
						<img src={Upload} alt="Upload" />
					</div>
				</div>
			</StyledDiv1>
			<StyledDiv2>
				<p>
					You’ve used <strong>815 GB</strong> of your storage{" "}
				</p>
				<div>
					<input
						type="range"
						min="0"
						max="1000"
						defaultValue={state}
						step="any"
						onChange={(e: ChangeEvent) => handleChange(e)}
					/>
					<div>
						<span>0 GB</span>
						<span>1000 GB</span>
					</div>
				</div>
				<div className="gb-left">
					<p>
						<span>{1000 - state}</span> GB Left
					</p>
				</div>
			</StyledDiv2>
		</StyledApp>
	);
};

export default App;

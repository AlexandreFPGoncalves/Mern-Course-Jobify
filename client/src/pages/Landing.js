import logo from '../assets/images/logo.svg';
import mainImage from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
	return (
		<div>
			<Wrapper>
				<nav>
					<img src={logo} alt="jobify" className="logo" />
				</nav>
				<div className="container page">
					{/* info */}
					<div className="info">
						<h1>
							job <span>tracking</span> app
						</h1>
						<p>
							I'm baby art party raclette jianbing artisan freegan, tote bag health goth scenester vinyl
							swag. Next level master cleanse swag kitsch VHS, leggings flannel chillwave keffiyeh vinyl
							man bun cronut lomo. 8-bit XOXO forage tbh. Stumptown knausgaard narwhal fixie green juice
							90's cornhole.
						</p>
						<button className="btn btn-hero">Login/Register</button>
					</div>
					{/* image */}
					<img src={mainImage} alt="jon hunt" class="img main-img" />
				</div>
			</Wrapper>
		</div>
	);
};

export default Landing;

import useWindowSize from '../../hooks/use-windowsize';
import { useForm } from 'react-hook-form';

import Button from '../ui/button/button';

import styles from './contact.module.scss';

const Contact = () => {
	const size = useWindowSize();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleRegistration = (data) => console.log(data);

	const registerOptions = {
		name: {
			required: "Can't be empty",
			validate: {
				message: (v) => (v[0].indexOf(' ') !== -1 ? 'white space' : null),
			},
		},
		email: {
			required: "Can't be empty",
			pattern:
				/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
		},
		phone: { required: "Can't be empty", pattern: /^0\d{9,10}$/ },
		message: {
			required: "Can't be empty",
			validate: {
				message: (v) => (v[0].indexOf(' ') !== -1 ? 'white space' : null),
			},
		},
	};

	return (
		<section className={`${size > 575 && 'container'} ${styles.container}`}>
			<picture>
				<source
					srcSet="/assets/contact/desktop/bg-pattern-hero-desktop.svg"
					media="(min-width: 48em)"
				/>
				<img
					className={styles.circle}
					src="/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
				/>
			</picture>
			<div className={styles.content}>
				<div className={styles.text}>
					<h2>Contact Us</h2>
					<p>
						Ready to take it to the next level? Let’s talk about your project or
						idea and find out how we can help your business grow. If you are
						looking for unique digital experiences that’s relatable to your
						users, drop us a line.
					</p>
				</div>
				<form
					className={styles.form}
					onSubmit={handleSubmit(handleRegistration)}
				>
					<div className={styles['form-content']}>
						<div className={styles['form-inner']}>
							<input
								type="text"
								placeholder="Name"
								{...register('name', registerOptions.name)}
							/>
							{errors?.name && (
								<div className={styles.error}>
									<p>{errors.name.message}</p>
									<img
										src="/assets/contact/desktop/icon-error.svg"
										alt="error icon"
									/>
								</div>
							)}
						</div>
						<div className={styles['form-inner']}>
							<input
								type="email"
								placeholder="Email Address"
								{...register('email', registerOptions.email)}
							/>
							{errors?.email && (
								<div className={styles.error}>
									<p>{errors.email.message}</p>
									<img
										src="/assets/contact/desktop/icon-error.svg"
										alt="error icon"
									/>
								</div>
							)}
						</div>
						<div className={styles['form-inner']}>
							<input
								type="tel"
								placeholder="Phone"
								{...register('phone', registerOptions.phone)}
							/>
							{errors?.phone && (
								<div className={styles.error}>
									<p>{errors.phone.message}</p>
									<img
										src="/assets/contact/desktop/icon-error.svg"
										alt="error icon"
									/>
								</div>
							)}
						</div>
						<div className={styles['form-inner']}>
							<textarea
								name=""
								id=""
								cols="30"
								rows="4"
								placeholder="Your Message"
								{...register('message', registerOptions.message)}
							></textarea>
							{errors?.message && (
								<div className={styles.error}>
									<p>{errors.message.message}</p>
									<img
										src="/assets/contact/desktop/icon-error.svg"
										alt="error icon"
									/>
								</div>
							)}
						</div>
					</div>
					<Button text="submit" type="submit" />
				</form>
			</div>
		</section>
	);
};

export default Contact;

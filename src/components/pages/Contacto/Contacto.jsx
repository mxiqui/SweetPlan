import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
const [formData, setFormData] = useState({
	name: '',
	email: '',
	message: '',
	phone: '' // Añadido el campo de teléfono
});

const handleChange = (e) => {
	setFormData({
	...formData,
	[e.target.name]: e.target.value,
	});
};

const handleSubmit = (e) => {
	e.preventDefault();

	emailjs.sendForm('service_hpu3mxy', 'template_rcyu9o8', e.target, 'A6BXVjFDzUKsyWmsH')
	.then((result) => {
		console.log(result.text);
		alert('Mensaje enviado con éxito');
	}, (error) => {
		console.log(error.text);
		alert('Error al enviar el mensaje');
	});

	setFormData({
	name: '',
	email: '',
	message: '',
	phone: ''
	});
};

return (
	<form className='formContact' onSubmit={handleSubmit}>
	<h3>Contact Us</h3>
	<p>Rellena los datos para poder contactar con nosotros.</p>
		<div className='containerFormularioContacto'>
			<div className='fieldContacto'>
			<label>Nombre</label>
			<input
			type="text"
			name="name"
			value={formData.name}
			onChange={handleChange}
			required
			/>
		</div>
		<div className='fieldContacto'>
			<label>Email</label>
			<input
			type="email"
			name="email"
			value={formData.email}
			onChange={handleChange}
			required
			/>
		</div>
		<div className='fieldContacto'>
			<label>Asunto</label>
			<input
			name="message"
			value={formData.message}
			onChange={handleChange}
			required
			/>
		</div>
		<div className='fieldContacto'>
			<label>Teléfono</label>
			<input
			type="tel"
			name="phone"
			value={formData.phone}
			onChange={handleChange}
			required
			/>
		</div>
		<div className='fieldContacto fieldContactoText'>
			<label>Mensaje</label>
			<textarea
			name="message"
			value={formData.message}
			onChange={handleChange}
			required
			/>
		</div>
		<div></div>
		<button type="submit">Enviar</button>
		</div>
	</form>
);
};

export default Contacto;

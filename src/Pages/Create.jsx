import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Create = ({ addCard }) => {
  
  const formik = useFormik({
    initialValues: {
      titulo: '',
      descripcion: '',
      categoria: '',
      equipo: '',
      link: '',
      image: '',
    },
    validationSchema: Yup.object({
      titulo: Yup.string()
        .required('Campo requerido')
        .min(3, 'Mínimo 3 caracteres')
        .max(20, 'Máximo 20 caracteres'),
      descripcion: Yup.string()
        .required('Campo requerido')
        .min(50, 'Mínimo 50 caracteres')
        .max(200, 'Máximo 200 caracteres'),
      categoria: Yup.string().required('Seleccione una categoría'),
      equipo: Yup.string()
        .required('Campo requerido')
        .min(3, 'Mínimo 3 caracteres')
        .max(15, 'Máximo 15 caracteres'),
      link: Yup.string()
        .required('Campo requerido')
        .min(10, 'Mínimo 10 caracteres')
        .max(50, 'Máximo 50 caracteres'),
      image: Yup.string()
        .required('Campo requerido'),
    }),
    onSubmit: (values) => {
      console.log(values);
      const newCard = {
        id: Date.now(), // Utiliza una forma única de ID (por ejemplo, la marca de tiempo)
        title: values.titulo,
        description: values.descripcion,
        category: values.categoria,
        team: values.equipo,        
        image: values.image,
        teamLink: values.link,
        // Añade más campos de acuerdo a tu estructura de tarjeta
      };

      // Llama a la función addCard para agregar la nueva tarjeta de deporte
      addCard(newCard);
      // Limpia el formulario después de agregar la tarjeta
      formik.resetForm();
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit} className="styled-form">

        <div className="crear-carta">
          <h3>Crear Carta</h3>
        </div>      

        <div className='mb-3'>          
          <b>Título:</b> <p></p>
          <input
            type='text'
            name='titulo'
            id='titulo'
            onChange={formik.handleChange}
            value={formik.values.titulo}
          />
          {formik.touched.titulo && formik.errors.titulo && (
            <div>{formik.errors.titulo}</div>
          )}
        </div>

        <div className='mb-3'>
          <b>Descripción:</b> <p></p>
          <textarea
            name='descripcion'
            id='descripcion'
            onChange={formik.handleChange}
            value={formik.values.descripcion}
            rows={10}                        
          />
          {formik.touched.descripcion && formik.errors.descripcion && (
            <div>{formik.errors.descripcion}</div>
          )}
        </div>

        <div className='mb-3'>
          <b>Categoría:</b> <p></p>
          <select
            name='categoria'
            id='categoria'
            onChange={formik.handleChange}
            value={formik.values.categoria}
          >
            <option value=''>Seleccione una categoría</option>
            <option value='Futbol'>Fútbol</option>
            <option value='Baloncesto'>Baloncesto</option>
            <option value='Tenis'>Tenis</option>
            <option value='Atletismo'>Atletismo</option>
            <option value='Natacion'>Natación</option>
            <option value='Ciclismo'>Ciclismo</option>
            <option value='Golf'>Golf</option>            
            <option value='Voleibol'>Voleibol</option>
            <option value='Hockey'>Hockey</option>
            <option value='Deportes de motor'>Deportes de motor</option>
            <option value='Deportes de mesa'>Deportes de mesa</option>
            <option value='Deportes por equipo'>Deportes por equipo</option>
          </select>
          {formik.touched.categoria && formik.errors.categoria && (
            <div>{formik.errors.categoria}</div>
          )}
        </div>

        <div className='mb-3'>
          <b>Equipo:</b> <p></p>
          <input
            type='text'
            name='equipo'
            id='equipo'
            onChange={formik.handleChange}
            value={formik.values.equipo}
          />
          {formik.touched.equipo && formik.errors.equipo && (
            <div>{formik.errors.equipo}</div>
          )}
        </div>
        
        <div className='mb-3'>          
          <b>Link:</b> <p></p>
          <input
            type='text'
            name='link'
            id='link'
            onChange={formik.handleChange}
            value={formik.values.link}
          />
          {formik.touched.link && formik.errors.link && (
            <div>{formik.errors.link}</div>
          )}
        </div>

        <div className='mb-3'>
          <b>Link de imagen:</b> <p></p>
          <input
            type='text'
            name='image'
            id='image'
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image && (
            <div>{formik.errors.image}</div>
          )}
        </div>
        <input type='submit' value='Enviar' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default Create;

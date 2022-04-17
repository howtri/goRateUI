// CreateSkill Component for adding a new skill
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import SkillForm from "./SkillForm";

const CreateSkill = () => {
    const [formValues, setFormValues] = 
        useState({ name: '' })
    const onSubmit = skillObject => {
        axios.post(
'http://localhost:3002/skill/add', 
    skillObject)
      .then(res => {
        if (res.status === 200)
          alert('Skill successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Error creating skill'))
}

  // Return student form
  return(
    <SkillForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Skill
    </SkillForm>
  )
}
  
// Export CreateStudent Component
export default CreateSkill

const User = [
    {
        id: 1,
        userName: "bibiche"
    }
]
const appointmentController= {
    createAppointement:(req, res) => {
        try {
            res.status(201).send(User);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    
    
    getAllsAppointement: (req, res) => {
        try {
            res.status(200).send(User)
        } catch (error) {
            res.status(400).send(error)
        }
    
    
    },
    getAllsAppointementById:(req, res) => {
        try {
            res.status(200).send(User)
        } catch (error) {
            res.status(400).send(error)
        }
    
    
    },
    
    updateAppointement: (req, res) => {
        try {
            res.status(200).send(User)
        } catch (error) {
            res.status(400).send(error)
        }
    
    
    },
    
    deleteAppointement: (req, res) => {
        try {
            res.status(200).send(User)
        } catch (error) {
            res.status(400).send(error)
        }
    
    
    }
}


module.exports= appointmentController




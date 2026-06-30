import Application from "../models/Application";

export const addApplication = async (req: any, res: any) => {
  try {
    console.log("Incoming Body:", req.body);

    if (!req.body.userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }

    const application = await Application.create(req.body);

    console.log("Saved to Mongo:", application);

    return res.status(201).json(application);
  } catch (error) {
    console.error("Mongo Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getApplications = async (req: any, res: any) => {
  try {
    const { userId } = req.params;

    const applications = await Application.find({ userId }).sort({
      createdAt: -1,
    });

    return res.status(200).json(applications);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
// // controllers/skill.controller.js
// import Skill from "../models/Skill.js";

// // 🔥 GET ALL SKILLS
// export const getSkills = async (req, res) => {
//   try {
//     const skills = await Skill.find();
//     res.json(skills);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching skills" });
//   }
// };

// // ➕ ADD SKILL
// export const addSkill = async (req, res) => {
//   try {
//     const { category, name, level, icon } = req.body;

//     const skill = await Skill.create({
//       category,
//       name,
//       level,
//       icon,
//     });

//     res.json(skill);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding skill" });
//   }
// };

// // ✏️ UPDATE SKILL
// export const updateSkill = async (req, res) => {
//   try {
//     const skill = await Skill.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.json(skill);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating skill" });
//   }
// };

// // ❌ DELETE SKILL
// export const deleteSkill = async (req, res) => {
//   try {
//     await Skill.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting skill" });
//   }
// };


import Skill from "../models/Skill.js";

// 🔥 GET
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills" });
  }
};

// ➕ ADD CATEGORY / SKILL
export const addSkill = async (req, res) => {
  try {
    const { category, name, icon } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category required" });
    }

    // 👉 only category
    if (!name) {
      const exists = await Skill.findOne({ category, name: null });

      if (exists) {
        return res.json({ message: "Category exists" });
      }

      const cat = await Skill.create({
        category,
        name: null,
      });

      return res.json(cat);
    }

    // 👉 skill
    const skill = await Skill.create({
      category,
      name,
      icon,
    });

    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: "Error adding skill" });
  }
};

// ❌ DELETE
export const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Error deleting skill" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Skill.deleteMany({ category: req.params.name });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
};
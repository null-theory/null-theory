import { TourService } from "../services/tourService.js";

export const TourController = {
    async create(req, res) {
        try {
            const result = await TourService.createTour(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getAll(req, res) {
        try {
            const tours = await TourService.getAllTours();
            res.status(200).json(tours);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getById(req, res) {
        try {
            const tour = await TourService.getTourById(req.params.id);
            if (!tour) return res.status(404).json({ message: "Tour not found" });
            res.status(200).json(tour);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            await TourService.updateTour(req.params.id, req.body);
            res.status(200).json({ message: "Tour updated" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async remove(req, res) {
        try {
            await TourService.deleteTour(req.params.id);
            res.status(200).json({ message: "Tour deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
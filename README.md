VetClinic Microservice

The client engaged Compass to develop a new microservice for their veterinary franchise, aiming to streamline internal client and attendance management across all owned clinics. The primary objective is to build the proof of concept (POC) foundation, providing the sales and management team with a technical overview of the client's requirements.

## Endpoints

### Tutors
- *GET /tutors:* Retrieves all tutors.
- *POST /tutor:* Creates a new tutor.
- *PUT /tutor/:id:* Updates information about a tutor.
- *DELETE /tutor/:id:* Deletes a tutor.

### Pets
- *POST /pet/:tutorId:* Creates a new pet and associates it with a tutor.
- *PUT /pet/:petId/tutor/:tutorId:* Updates information about a pet within a tutor.
- *DELETE /pet/:petId/tutor/:tutorId:* Deletes a pet from a tutor.

## Features

- Implementation of a REST API following specified patterns.
- Creation of tutors and pets with associated endpoints.
- Update and deletion functionalities for tutors and pets.
- Integration of necessary npm packages for project dependencies.

## Installation

npm install

# Start
npm run dev


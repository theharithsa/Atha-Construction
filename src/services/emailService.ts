import nodemailer from 'nodemailer';
import { config } from '../config';
import { ContactFormData, CareerFormData } from '../types';
import logger from '../utils/logger';

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.email.host,
      port: config.email.port,
      secure: config.email.secure,
      auth: {
        user: config.email.auth.user,
        pass: config.email.auth.pass,
      },
    });
  }

  /**
   * Send contact form email
   */
  async sendContactEmail(data: ContactFormData): Promise<boolean> {
    try {
      const htmlContent = this.generateContactEmailHtml(data);
      const subject = `Enquiry from ${config.project.name}`;

      const mailOptions = {
        from: config.email.from,
        to: config.email.to,
        subject,
        html: htmlContent,
        replyTo: data.email,
      };

      await this.transporter.sendMail(mailOptions);
      logger.info(`Contact email sent successfully for ${data.email}`);
      return true;
    } catch (error) {
      logger.error('Failed to send contact email:', error);
      return false;
    }
  }

  /**
   * Send career application email
   */
  async sendCareerEmail(data: CareerFormData): Promise<boolean> {
    try {
      const htmlContent = this.generateCareerEmailHtml(data);
      const subject = `Career Application - ${data.post} from ${config.project.name}`;

      const mailOptions: nodemailer.SendMailOptions = {
        from: config.email.from,
        to: config.email.to,
        subject,
        html: htmlContent,
        replyTo: data.email,
      };

      // Add resume attachment if provided
      if (data.resume) {
        mailOptions.attachments = [
          {
            filename: data.resume.originalname,
            content: data.resume.buffer,
          },
        ];
      }

      await this.transporter.sendMail(mailOptions);
      logger.info(`Career application email sent successfully for ${data.email}`);
      return true;
    } catch (error) {
      logger.error('Failed to send career application email:', error);
      return false;
    }
  }

  /**
   * Generate HTML content for contact email
   */
  private generateContactEmailHtml(data: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Contact Form Enquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #fff; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Enquiry from ${config.project.name}</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">+91 ${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">Construction Type:</div>
              <div class="value">${data.type}</div>
            </div>
            <div class="field">
              <div class="label">Plot Size:</div>
              <div class="value">${data.plotsize}</div>
            </div>
            ${data.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Generate HTML content for career email
   */
  private generateCareerEmailHtml(data: CareerFormData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Career Application</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f4f4f4; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #fff; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Career Application - ${data.post}</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            <div class="field">
              <div class="label">City:</div>
              <div class="value">${data.city}</div>
            </div>
            <div class="field">
              <div class="label">Position Applied For:</div>
              <div class="value">${data.post}</div>
            </div>
            <div class="field">
              <div class="label">Experience:</div>
              <div class="value">${data.experience}</div>
            </div>
            ${data.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
            ` : ''}
            ${data.resume ? `
            <div class="field">
              <div class="label">Resume:</div>
              <div class="value">Attached (${data.resume.originalname})</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
    `;
  }

  /**
   * Test email configuration
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      logger.info('Email service connection verified successfully');
      return true;
    } catch (error) {
      logger.error('Email service connection failed:', error);
      return false;
    }
  }
}

export default new EmailService();

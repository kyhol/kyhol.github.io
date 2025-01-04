import React from "react";

const CodeDisplay = ({ code }) => {
  const lines = code.split("\n");
  return (
    <div className="w-full">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400">java</span>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            <code>
              {lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 w-8 inline-block select-none">
                    {index + 1}
                  </span>
                  <span className="flex-1">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  technologies,
  features = [],
  codeSnippet,
  architecture = [],
  contributors = [],
  documentation = [],
}) => {
  return (
    <div className="border border-gray-700 rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8 bg-gray-800">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>

      {contributors.length > 0 && (
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-gray-100">Contributors:</h3>
          <div className="flex flex-wrap gap-2">
            {contributors.map((contributor) => (
              <span
                key={contributor}
                className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {contributor}
              </span>
            ))}
          </div>
        </div>
      )}

      {codeSnippet && (
        <div className="mb-4">
          <CodeDisplay code={codeSnippet} />
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Key Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">
          Architecture & Implementation:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {architecture.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Documentation:</h3>
        <ul className="list-disc list-inside space-y-1">
          {documentation.map((doc, index) => (
            <li key={index} className="text-gray-300">
              {doc}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-gray-100">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sem3JavaFinal = () => {
  const projects = [
    {
      title: "Console-Based E-Commerce Platform",
      description:
        "A robust Java-based e-commerce platform featuring role-based authentication, product management, and PostgreSQL integration. The system supports multiple user roles with distinct functionalities, secure password management, and a comprehensive CLI interface.",
      technologies: [
        "Java",
        "PostgreSQL",
        "Maven",
        "BCrypt",
        "JDBC",
        "Git/GitHub",
        "JUnit",
      ],
      codeSnippet: `// User class implementation with inheritance
public abstract class User {
    protected int id;
    protected String username;
    protected String email;
    protected String password;
    
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = BCrypt.hashpw(password, BCrypt.gensalt());
    }
}

public class Seller extends User {
    private List<Product> products;
    
    public Seller(String username, String email, String password) {
        super(username, email, password);
        this.products = new ArrayList<>();
    }
    
    public void addProduct(Product product) {
        products.add(product);
        ProductDAO.save(product);
    }
    
    public List<Product> getProducts() {
        return ProductDAO.findBySellerID(this.id);
    }
}

// Product Service implementation
public class ProductService {
    private final ProductDAO productDAO;
    
    public ProductService(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }
    
    public boolean addProduct(Product product) {
        try {
            return productDAO.save(product);
        } catch (SQLException e) {
            logger.error("Error saving product: " + e.getMessage());
            return false;
        }
    }
    
    public List<Product> getSellerProducts(int sellerId) {
        return productDAO.findBySellerID(sellerId);
    }
}`,
      features: [
        "Role-based user authentication (Buyer, Seller, Admin)",
        "Secure password encryption using BCrypt",
        "Product management system with CRUD operations",
        "User management with role inheritance",
        "PostgreSQL database integration",
        "Console-based user interface",
        "Data Access Object (DAO) pattern implementation",
      ],
      architecture: [
        "Model-Service-DAO architecture pattern",
        "Inheritance hierarchy for user roles",
        "JDBC for database operations",
        "Maven dependency management",
        "CLI menu system with role-specific options",
        "PostgreSQL schema with Users and Products tables",
        "GitHub project board and PR workflow",
      ],
      documentation: [
        "Comprehensive JavaDocs for all classes",
        "SQL scripts for database setup",
        "User documentation with class diagrams",
        "Development setup guide",
        "Installation and deployment manual",
        "Individual contribution reports",
        "Video demonstration of functionality",
      ],
      contributors: ["Brian Janes", "Brad Ayers"],
    },
  ];

  return (
    <div className="p-4 bg-gray-900">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Sem3JavaFinal;
